/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { RelatedArtists_viewer$ref } from "./RelatedArtists_viewer.graphql";
export type RelatedArtists_Test_QueryVariables = {
    readonly artistID: string;
};
export type RelatedArtists_Test_QueryResponse = {
    readonly viewer: ({
        readonly " $fragmentRefs": RelatedArtists_viewer$ref;
    }) | null;
};
export type RelatedArtists_Test_Query = {
    readonly response: RelatedArtists_Test_QueryResponse;
    readonly variables: RelatedArtists_Test_QueryVariables;
};



/*
query RelatedArtists_Test_Query(
  $artistID: String!
) {
  viewer {
    ...RelatedArtists_viewer
  }
}

fragment RelatedArtists_viewer on Viewer {
  mainArtists: artist(id: $artistID) {
    ...RelatedArtistsList_artist_hdyd3
    __id
  }
}

fragment RelatedArtistsList_artist_hdyd3 on Artist {
  id
  related {
    artists(first: 16, kind: MAIN) {
      pageInfo {
        hasNextPage
        endCursor
      }
      pageCursors {
        ...Pagination_pageCursors
      }
      edges {
        node {
          ...ArtistCard_artist
          __id
        }
      }
    }
  }
  __id
}

fragment Pagination_pageCursors on PageCursors {
  around {
    cursor
    page
    isCurrent
  }
  first {
    cursor
    page
    isCurrent
  }
  last {
    cursor
    page
    isCurrent
  }
  previous {
    cursor
    page
  }
}

fragment ArtistCard_artist on Artist {
  name
  id
  href
  image {
    cropped(width: 400, height: 300) {
      url
    }
  }
  formatted_nationality_and_birthday
  ...FollowArtistButton_artist
  __id
}

fragment FollowArtistButton_artist on Artist {
  __id
  id
  is_followed
  counts {
    follows
  }
  ...FollowArtistPopover_suggested
}

fragment FollowArtistPopover_suggested on Artist {
  related {
    suggested(first: 3, exclude_followed_artists: true) {
      edges {
        node {
          __id
          ...FollowArtistPopoverRow_artist
        }
      }
    }
  }
  __id
}

fragment FollowArtistPopoverRow_artist on Artist {
  id
  _id
  __id
  name
  image {
    cropped(width: 45, height: 45) {
      url
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "artistID",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "page",
  "args": null,
  "storageKey": null
},
v4 = [
  v2,
  v3,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "isCurrent",
    "args": null,
    "storageKey": null
  }
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "url",
    "args": null,
    "storageKey": null
  }
],
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "RelatedArtists_Test_Query",
  "id": null,
  "text": "query RelatedArtists_Test_Query(\n  $artistID: String!\n) {\n  viewer {\n    ...RelatedArtists_viewer\n  }\n}\n\nfragment RelatedArtists_viewer on Viewer {\n  mainArtists: artist(id: $artistID) {\n    ...RelatedArtistsList_artist_hdyd3\n    __id\n  }\n}\n\nfragment RelatedArtistsList_artist_hdyd3 on Artist {\n  id\n  related {\n    artists(first: 16, kind: MAIN) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      pageCursors {\n        ...Pagination_pageCursors\n      }\n      edges {\n        node {\n          ...ArtistCard_artist\n          __id\n        }\n      }\n    }\n  }\n  __id\n}\n\nfragment Pagination_pageCursors on PageCursors {\n  around {\n    cursor\n    page\n    isCurrent\n  }\n  first {\n    cursor\n    page\n    isCurrent\n  }\n  last {\n    cursor\n    page\n    isCurrent\n  }\n  previous {\n    cursor\n    page\n  }\n}\n\nfragment ArtistCard_artist on Artist {\n  name\n  id\n  href\n  image {\n    cropped(width: 400, height: 300) {\n      url\n    }\n  }\n  formatted_nationality_and_birthday\n  ...FollowArtistButton_artist\n  __id\n}\n\nfragment FollowArtistButton_artist on Artist {\n  __id\n  id\n  is_followed\n  counts {\n    follows\n  }\n  ...FollowArtistPopover_suggested\n}\n\nfragment FollowArtistPopover_suggested on Artist {\n  related {\n    suggested(first: 3, exclude_followed_artists: true) {\n      edges {\n        node {\n          __id\n          ...FollowArtistPopoverRow_artist\n        }\n      }\n    }\n  }\n  __id\n}\n\nfragment FollowArtistPopoverRow_artist on Artist {\n  id\n  _id\n  __id\n  name\n  image {\n    cropped(width: 45, height: 45) {\n      url\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RelatedArtists_Test_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "viewer",
        "name": "__viewer_viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "RelatedArtists_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RelatedArtists_Test_Query",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": "mainArtists",
            "name": "artist",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "artistID",
                "type": "String!"
              }
            ],
            "concreteType": "Artist",
            "plural": false,
            "selections": [
              v1,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "related",
                "storageKey": null,
                "args": null,
                "concreteType": "ArtistRelatedData",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "artists",
                    "storageKey": "artists(first:16,kind:\"MAIN\")",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "first",
                        "value": 16,
                        "type": "Int"
                      },
                      {
                        "kind": "Literal",
                        "name": "kind",
                        "value": "MAIN",
                        "type": "RelatedArtistsKind"
                      }
                    ],
                    "concreteType": "ArtistConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "pageInfo",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "PageInfo",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "hasNextPage",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "endCursor",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "pageCursors",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "PageCursors",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "around",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "PageCursor",
                            "plural": true,
                            "selections": v4
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "first",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "PageCursor",
                            "plural": false,
                            "selections": v4
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "last",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "PageCursor",
                            "plural": false,
                            "selections": v4
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "previous",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "PageCursor",
                            "plural": false,
                            "selections": [
                              v2,
                              v3
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "ArtistEdge",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Artist",
                            "plural": false,
                            "selections": [
                              v5,
                              v1,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "href",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "image",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Image",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "cropped",
                                    "storageKey": "cropped(height:300,width:400)",
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "height",
                                        "value": 300,
                                        "type": "Int!"
                                      },
                                      {
                                        "kind": "Literal",
                                        "name": "width",
                                        "value": 400,
                                        "type": "Int!"
                                      }
                                    ],
                                    "concreteType": "CroppedImageUrl",
                                    "plural": false,
                                    "selections": v6
                                  }
                                ]
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "formatted_nationality_and_birthday",
                                "args": null,
                                "storageKey": null
                              },
                              v7,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "is_followed",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "counts",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "ArtistCounts",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "follows",
                                    "args": null,
                                    "storageKey": null
                                  }
                                ]
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "related",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "ArtistRelatedData",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "suggested",
                                    "storageKey": "suggested(exclude_followed_artists:true,first:3)",
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "exclude_followed_artists",
                                        "value": true,
                                        "type": "Boolean"
                                      },
                                      {
                                        "kind": "Literal",
                                        "name": "first",
                                        "value": 3,
                                        "type": "Int"
                                      }
                                    ],
                                    "concreteType": "ArtistConnection",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "edges",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "ArtistEdge",
                                        "plural": true,
                                        "selections": [
                                          {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "node",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "Artist",
                                            "plural": false,
                                            "selections": [
                                              v7,
                                              v1,
                                              {
                                                "kind": "ScalarField",
                                                "alias": null,
                                                "name": "_id",
                                                "args": null,
                                                "storageKey": null
                                              },
                                              v5,
                                              {
                                                "kind": "LinkedField",
                                                "alias": null,
                                                "name": "image",
                                                "storageKey": null,
                                                "args": null,
                                                "concreteType": "Image",
                                                "plural": false,
                                                "selections": [
                                                  {
                                                    "kind": "LinkedField",
                                                    "alias": null,
                                                    "name": "cropped",
                                                    "storageKey": "cropped(height:45,width:45)",
                                                    "args": [
                                                      {
                                                        "kind": "Literal",
                                                        "name": "height",
                                                        "value": 45,
                                                        "type": "Int!"
                                                      },
                                                      {
                                                        "kind": "Literal",
                                                        "name": "width",
                                                        "value": 45,
                                                        "type": "Int!"
                                                      }
                                                    ],
                                                    "concreteType": "CroppedImageUrl",
                                                    "plural": false,
                                                    "selections": v6
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              v7
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "viewer",
        "args": null,
        "handle": "viewer",
        "key": "",
        "filters": null
      }
    ]
  }
};
})();
(node as any).hash = '11823a5cb97e717e6bd238aa24b54df2';
export default node;
