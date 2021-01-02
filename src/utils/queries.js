import { gql } from '@apollo/client'

mutation CreateThreadWithTags {
    insert_threads_one(object: {
        url: "https://twitter.com/optimoprincipi/status/1281534833320222721?s=21",
        author: "optimoprincipi",
        title: "Roman Treasures",
        description: null,
        thread_tags: {
            data: [
                {
                    tag: {
                        data: {
                            name: "European"
                        },
                        on_conflict: {
                            constraint: tags_name_key, update_columns: name
                        }
                    }
                },
                {
                    tag: {
                        data: {
                            name: "Roman"
                        },
                        on_conflict: {
                            constraint: tags_name_key, update_columns: name
                        }
                    }
                },
                {
                    tag: {
                        data: {
                            name: "History"
                        },
                        on_conflict: {
                            constraint: tags_name_key, update_columns: name
                        }
                    }
                }
            ]
        }
    }) {
        id
        author
        url
        title
        description
        created_at
        thread_tags {
            tag {
                id
                name
            }
        }
    }
}


constructTags = tagNames => tagNames.map(tagName => gql`
       oh {
            tag: {
              data: {
                name: ${tagName}
              }, 
              on_conflict: {
                constraint: tags_name_key, update_columns: name
              }
            }
          }
    `
)