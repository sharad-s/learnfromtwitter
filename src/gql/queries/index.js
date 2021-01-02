
import { gql } from '@apollo/client';

import getThreadsByTag from './getAllThreadsByTag.gql'
import getThreadsByTags from './getAllThreadsByTags.gql'
import getAllTags from './getAllTags.gql'
import searchTags from './searchTags.gql'

export const GET_THREADS_BY_TAG = gql`${getThreadsByTag}`
export const GET_THREADS_BY_TAGS = gql`${getThreadsByTags}`
export const GET_ALL_TAGS = gql`${getAllTags}`
export const SEARCH_TAGS = gql`${searchTags}`