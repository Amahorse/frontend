import React, { FC } from 'react'

interface BannerProps {
  preview?: boolean | string
  pro?: boolean
}

const Banner: FC<BannerProps> = ({ preview, pro }) => {
  return (
    <>
      {pro && (
        <div className="bg-danger d-none d-lg-block bg-opacity-10 border-start border-start-5 border-start-danger p-4 pb-3 mb-5">
          <h3 className="mb-4">CoreUI PRO Component</h3>
          <p>
            To use this component you must have a CoreUI PRO license. Buy the{' '}
            <a href="https://coreui.io/pricing/?framework=react&docs=coreui-banner-pro">
              CoreUI PRO
            </a>{' '}
            and get access to all PRO components, features, templates, and dedicated support.
          </p>
        </div>
      )}
      {preview && (
        <div className="bg-warning d-none d-lg-block bg-opacity-10 border-start border-start-5 border-start-warning p-4 pb-3 mb-5">
          <h3 className="mb-4">Alpha release</h3>
          <p>
            This component is in the Alpha phase and has an experimental API, which can be changed
            in the final release. If you want to use this component, please install{' '}
            <strong>@coreui/coreui-pro {preview}</strong> and{' '}
            <strong>@coreui/react-pro {preview}</strong>
          </p>
        </div>
      )}
    </>
  )
}

Banner.displayName = 'Banner'

export default Banner
