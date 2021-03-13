import React, { Fragment } from 'react'

// `UI` Components.
import { Spinner } from '@google-clone/widgets'

export default function PageLoader({ loading }) {

  return <Fragment>{loading && <Spinner />}</Fragment>
}
