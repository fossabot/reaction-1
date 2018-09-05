import { Serif } from "@artsy/palette"
import { CollectApp_viewer } from "__generated__/CollectApp_viewer.graphql"
import React, { Component } from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { Box } from "Styleguide/Elements/Box"
import { Flex } from "Styleguide/Elements/Flex"
import { ArtworkGridFragmentContainer as ArtworkGrid } from "./Components/ArtworkGrid"

export interface CollectAppProps {
  name: string
  viewer?: CollectApp_viewer
}

export class CollectApp extends Component<CollectAppProps> {
  render() {
    return (
      <Flex flexDirection="column">
        <Box my={2}>
          <Serif size="8">Collect Art &amp; Design Online</Serif>
        </Box>
        <Box>
          <ArtworkGrid viewer={this.props.viewer} />
        </Box>
      </Flex>
    )
  }
}

export const CollectAppFragmentContainer = createFragmentContainer(
  CollectApp,
  graphql`
    fragment CollectApp_viewer on Viewer {
      ...ArtworkGrid_viewer
    }
  `
)
