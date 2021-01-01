
import { gql } from '@apollo/client';

import getThreadsByTag from './getAllThreadsByTag.gql'
import getAllTags from './getAllTags.gql'
import searchTags from './searchTags.gql'

export const GET_THREADS_BY_TAG = gql`${getThreadsByTag}`
export const GET_ALL_TAGS = gql`${getAllTags}`
export const SEARCH_TAGS = gql`${searchTags}`