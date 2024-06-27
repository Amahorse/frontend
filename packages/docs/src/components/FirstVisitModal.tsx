import React, { FC, useEffect, useState } from 'react'
import {
  CCloseButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
} from '@coreui/react-pro/src/'

const getCookie = (cname: string) => {
  const name = `${cname}=`
  const decodedCookie = decodeURIComponent(document.cookie)
  const ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

const setCookie = (cname: string, cvalue: boolean, exdays: number) => {
  const d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + d.toUTCString()
  document.cookie = `${cname}=${cvalue};${expires};path=/`
}

declare global {
  interface Window {
    dataLayer: any[]
  }
}

const FirstVisitModal: FC = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (getCookie('firstVisit') !== 'true') {
      setTimeout(() => {
        setVisible(true)
        setCookie('firstVisit', true, 365)
        if (typeof window.dataLayer !== 'undefined') {
          window.dataLayer.push({ event: 'first-visit-modal-show' })
        }
      }, 2500)
    }
  })

  return (
    <CModal size="xl" visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader className="d-block" closeButton={false}>
        <CCloseButton className="float-end" onClick={() => setVisible(false)} />
        <div className="text-center modal-title">
          <h2>Buy CoreUI PRO now and save 75%</h2>
          <h3 className="text-danger">This is one-time offer!</h3>
        </div>
      </CModalHeader>
      <CModalBody>
        <div className="row">
          <div className="col-md-7 d-flex align-items-center">
            <div>
              <img
                src="https://coreui.io/images/mockups/mockup_3_1_free.webp"
                className="img-fluid"
                alt="Bootstrap Admin Panel Template"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-md-5">
            <p>
              Get a PRO plan to access advanced features, professional support, and support CoreUI
              development.
            </p>
            <ul className="list-unstyled">
              <li className="py-2">✅ Save thousands of dollars for UI and UX designing.</li>
              <li className="py-2">
                ✅ Human tech support provided by CoreUI Core Team Developers.
              </li>
              <li className="py-2">
                ✅ PRO Components: Date Picker, Multi Select, Smart Table, etc.
              </li>
            </ul>
            <h3 className="text-danger text-center mb-3">Use code CDITFDSF at checkout.</h3>
            <a
              href="https://coreui.io/pricing/?fvd=true"
              className="btn btn-lg btn-success"
              style={{ width: '100%' }}
            >
              Buy now and save up to $749
            </a>
          </div>
        </div>
      </CModalBody>
      <CModalFooter>
        <div className="text-center">
          <div className="text-uppercase mb-3 row">
            <div className="col-md-9 mx-auto">
              <strong>
                You’re in good company.{' '}
                <span className="text-muted">
                  CoreUI powers thousands of apps at some of the smartest companies around the
                  world.
                </span>
              </strong>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img
                className="img-fluid"
                src="https://coreui.io/images/clients/nvidia600.png"
                alt="Nvidia"
              />
            </div>
            <div className="col">
              <img
                className="img-fluid"
                src="https://coreui.io/images/clients/ea600.png"
                alt="EA"
              />
            </div>
            <div className="col">
              <img
                className="img-fluid"
                src="https://coreui.io/images/clients/dhl600.png"
                alt="DHL"
              />
            </div>
            <div className="col">
              <img
                className="img-fluid"
                src="https://coreui.io/images/clients/olx600.png"
                alt="OLX"
              />
            </div>
            <div className="col">
              <img
                className="img-fluid"
                src="https://coreui.io/images/clients/citi600.png"
                alt="Citi"
              />
            </div>
            <div className="col">
              <img
                className="img-fluid"
                src="https://coreui.io/images/clients/paypal600.png"
                alt="PayPal"
              />
            </div>
            <div className="col">
              <img
                className="img-fluid"
                src="https://coreui.io/images/clients/virgin-media600.png"
                alt="Virgin"
              />
            </div>
            <div className="col">
              <img
                className="img-fluid"
                src="https://coreui.io/images/clients/plus500600.png"
                alt="Plus500"
              />
            </div>
            <div className="col">
              <img
                className="img-fluid"
                src="https://coreui.io/images/clients/cisco600.png"
                alt="Cisco"
              />
            </div>
          </div>
        </div>
      </CModalFooter>
    </CModal>
  )
}

FirstVisitModal.displayName = 'FirstVisitModal'

export default FirstVisitModal
