import { FormattedMessage } from 'react-intl'
import Footer from '@components/Footer/Footer'

import cave from '@static/images/cave.webp'
import './Home.css'

export default function Home() {
  return (
    <div id="home" className="page">
      <div className="container">
        <h1>
          <span>
            <FormattedMessage id="home.welcome" />
          </span>
          {` `}
          <span className="icon icofont-rss" />
        </h1>
        <img src={cave} alt="cave 3d illustration" />
      </div>
      <Footer />
    </div>
  )
}
