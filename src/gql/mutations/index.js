
import { gql } from '@apollo/client';

import createThread from './createThread.gql'

export const CREATE_THREAD =  gql`${createThread}`

export default { 
    CREATE_THREAD
}