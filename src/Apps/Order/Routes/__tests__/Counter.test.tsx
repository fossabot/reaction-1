import {
  Buyer,
  OfferOrderWithShippingDetails,
  Offers,
  OfferWithTotals,
} from "Apps/__tests__/Fixtures/Order"
import { trackPageView } from "Apps/Order/Utils/trackPageView"
import { createTestEnv } from "DevTools/createTestEnv"
import moment from "moment"
import { commitMutation as _commitMutation, graphql } from "react-relay"
import {
  insufficientInventoryResponse,
  submitPendingOfferFailed,
  submitPendingOfferSuccess,
} from "../__fixtures__/MutationResults/submitPendingOffer"
import { CounterFragmentContainer } from "../Counter"
import { OrderAppTestPage } from "./Utils/OrderAppTestPage"

jest.mock("Apps/Order/Utils/trackPageView")
jest.mock("Utils/getCurrentTimeAsIsoString")
const NOW = "2018-12-05T13:47:16.446Z"
require("Utils/getCurrentTimeAsIsoString").__setCurrentTime(NOW)
jest.unmock("react-relay")

const testOrder = {
  ...OfferOrderWithShippingDetails,
  stateExpiresAt: moment(NOW)
    .add(1, "day")
    .toISOString(),
  lastOffer: {
    ...OfferWithTotals,
    id: "lastOffer",
    createdAt: moment(NOW)
      .subtract(1, "day")
      .toISOString(),
    amount: "$sellers.offer",
  },
  myLastOffer: {
    ...OfferWithTotals,
    id: "myLastOffer",
    createdAt: moment(NOW)
      .subtract(1, "seconds")
      .toISOString(),
    amount: "$your.offer",
    fromParticipant: "BUYER",
  },
  offers: { edges: Offers },
  buyer: Buyer,
}

describe("Submit Pending Counter Offer", () => {
  const { buildPage, mutations, routes } = createTestEnv({
    Component: CounterFragmentContainer,
    query: graphql`
      query CounterTestQuery {
        order(id: "") {
          ...Counter_order
        }
      }
    `,
    defaultMutationResults: {
      ...submitPendingOfferSuccess,
    },
    defaultData: {
      order: testOrder,
    },
    TestPage: OrderAppTestPage,
  })

  describe("with default data", () => {
    let page: OrderAppTestPage
    beforeAll(async () => {
      page = await buildPage({
        mockData: {
          order: {
            ...testOrder,
            stateExpiresAt: moment(NOW)
              .add(1, "day")
              .add(4, "hours")
              .add(22, "minutes")
              .add(59, "seconds")
              .toISOString(),
          },
        },
      })
    })

    it("shows the countdown timer", () => {
      expect(page.countdownTimer.text()).toContain("01d 04h 22m 59s left")
    })

    it("Shows the stepper", () => {
      expect(page.orderStepper.text()).toMatchInlineSnapshot(
        `"checkRespond navigate rightReview"`
      )
      expect(page.orderStepperCurrentStep).toBe("Review")
    })

    it("shows the transaction summary", () => {
      expect(page.transactionSummary.text()).toMatch("Your counterofferChange")
      expect(page.transactionSummary.text()).toMatch("Your offer$your.offer")
      expect(page.transactionSummary.text()).toMatch(
        "Seller's offer$sellers.offer"
      )
    })

    it("shows the artwork summary", () => {
      expect(page.artworkSummary.text()).toMatch(
        "Lisa BreslowGramercy Park South"
      )
    })

    it("shows the shipping details", () => {
      expect(page.shippingSummary.text()).toMatch(
        "Ship toLockedJoelle Van Dyne401 Broadway"
      )
    })

    it("shows the payment details", () => {
      expect(page.paymentSummary.text()).toMatchInlineSnapshot(
        `"Lockedvisa•••• 4444   Exp 03/21"`
      )
    })

    it("shows the submit button", () => {
      expect(page.submitButton.text()).toBe("Submit")
    })

    it("Shows the conditions of sale disclaimer.", () => {
      expect(page.conditionsOfSaleDisclaimer.text()).toMatch(
        "By clicking Submit, I agree to Artsy’s Conditions of Sale."
      )
    })
  })

  describe("mutation", () => {
    let page: OrderAppTestPage
    beforeEach(async () => {
      page = await buildPage()
    })

    it("routes to status page after mutation completes", async () => {
      await page.clickSubmit()
      expect(routes.mockPushRoute).toHaveBeenCalledWith(
        `/orders/${testOrder.id}/status`
      )
    })

    it("shows the button spinner while loading the mutation", async () => {
      await page.expectButtonSpinnerWhenSubmitting()
    })

    it("shows an error modal with proper error when there is insufficient inventory", async () => {
      mutations.useResultsOnce(insufficientInventoryResponse)
      await page.clickSubmit()
      await page.expectAndDismissErrorDialogMatching(
        "This work has already been sold.",
        "Please contact orders@artsy.net with any questions."
      )
    })

    it("shows generic error modal when there is an error from the server", async () => {
      mutations.useResultsOnce(submitPendingOfferFailed)
      await page.clickSubmit()
      await page.expectAndDismissDefaultErrorDialog()
    })

    it("shows an error modal when there is a network error", async () => {
      mutations.mockNetworkFailureOnce()
      await page.clickSubmit()
      await page.expectAndDismissDefaultErrorDialog()
    })
  })

  describe("analytics", () => {
    it("tracks a pageview", async () => {
      await buildPage()
      expect(trackPageView).toHaveBeenCalledTimes(1)
    })
  })
})
