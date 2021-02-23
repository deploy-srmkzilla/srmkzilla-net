import dynamic from 'next/dynamic'
import Loader from '../shared/components/loader'
const AboutPage = dynamic(() => import('../shared/components/about'), {
  ssr: false,
  loading: () => <Loader />,
})

const index = () => {
  return <AboutPage />
}

export default index
