import React from "react"
import { storiesOf } from "storybook/storiesOf"
import { Section } from "Styleguide/Utils/Section"
import { Sidebar } from "Styleguide/Pages/Artwork/Sidebar"

import {
  CollecingInstitutionArtwork,
  MultipleArtistsArtwork,
  RegularNonEditionedArtwork,
  RegularArtworkWithOneEdition,
  RegularArtwork2Editions,
  OpenAuctionArtwork,
  LiveAuctionArtwork,
  ClosedAuctionArtwork,
} from "Styleguide/Pages/Fixtures/Artworks"

storiesOf("Styleguide/Artwork/", module).add("Sidebar", () => {
  return (
    <React.Fragment>
      <Section title="Artwork with collectiing_institution attribute set">
        <Sidebar artwork={CollecingInstitutionArtwork} />
      </Section>
      <Section title="Multiple artists artwork">
        <Sidebar artwork={MultipleArtistsArtwork} />
      </Section>
      <Section title="Regular non editioned artwork">
        <Sidebar artwork={RegularNonEditionedArtwork} />
      </Section>
      <Section title="Regular artwork with 1 edition set">
        <Sidebar artwork={RegularArtworkWithOneEdition} />
      </Section>
      <Section title="Regular artwork with 2 editions">
        <Sidebar artwork={RegularArtwork2Editions} />
      </Section>
      <Section title="Current auction artwork with bidding allowed">
        <Sidebar artwork={OpenAuctionArtwork} />
      </Section>
      <Section title="Live auction artwork">
        <Sidebar artwork={LiveAuctionArtwork} />
      </Section>
      <Section title="Closed auction artwork">
        <Sidebar artwork={ClosedAuctionArtwork} />
      </Section>
    </React.Fragment>
  )
})
