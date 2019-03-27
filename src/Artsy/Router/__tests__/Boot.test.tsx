import { ContextConsumer } from "Artsy"
import { Boot } from "Artsy/Router"
import { ErrorBoundary } from "Components/ErrorBoundary"
import { mount } from "enzyme"
import React from "react"

describe("Boot", () => {
  const bootProps: any = {
    system: {
      relayEnvironment: false,
    },
  }

  const getWrapper = () => mount(<Boot {...bootProps} />)

  it("injects global state", () => {
    const App = () => {
      return (
        <Boot welcomeMessage="Found global state" {...bootProps}>
          <SomeOtherComponent />
        </Boot>
      )
    }

    const SomeOtherComponent = () => {
      return (
        <ContextConsumer>
          {({ welcomeMessage }: any) => {
            return <div>{welcomeMessage}</div>
          }}
        </ContextConsumer>
      )
    }

    expect(mount(<App />).html()).toContain("Found global state")
  })

  it("injects ContextProvider", () => {
    expect(getWrapper().find("ContextProvider").length).toEqual(1)
  })

  it("injects ResponsiveProvider", () => {
    // TODO: Because of our backwards compatible wrapper, there are now 2 nested
    //       components in the tree by the same name.
    expect(getWrapper().find("ResponsiveProvider").length).not.toEqual(0)
  })

  it("injects GlobalStyles", () => {
    expect(getWrapper().find("GlobalStyles").length).toEqual(1)
  })

  it("injects Theme", () => {
    expect(getWrapper().find("Theme").length).toEqual(1)
  })

  it("injects Grid", () => {
    expect(mount(<Boot {...bootProps} />).find("Grid").length).toEqual(1)
  })

  it("catches errors with componentDidCatch", () => {
    console.error = jest.fn()
    const BrokenComponent = () => {
      throw new Error("error message")
      return <div>error</div>
    }

    jest.spyOn(ErrorBoundary.prototype, "componentDidCatch")
    mount(
      <Boot {...bootProps}>
        <BrokenComponent />
      </Boot>
    )
    expect(ErrorBoundary.prototype.componentDidCatch).toHaveBeenCalled()
  })
})