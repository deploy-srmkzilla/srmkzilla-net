import EventDetails from '@shared/components/events/event-details'
import SpeakerPage from '@shared/components/events/event-speaker'
import EventTimeline from '@shared/components/events/event-timeline'
import Head from 'next/head'
import React from 'react'
import { EventType } from '.'
import Footer from '../../shared/components/footer'
import { getEvent } from '../../utils/api'

const Events = (props: EventType) => {
  const { title } = props

  return (
    <div className="bg-black overflow-hidden text-white">
      <Head>
        <title>{title}</title>
      </Head>

      <div className="min-h-screen">
        <img
          className="fixed top-0 right-0 xl:h-screen h-2/4 z-0 opacity-80"
          src="../images/projectbg.png"
          alt="background"
          draggable={false}
        />
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          <div className="w-full lg:w-11/12 flex md:items-start items-center md:mx-0 justify-center md:justify-start flex-col z-10  md:px-12 px-5 md:mt-28 mt-16 lg:mt-32 mx-10">
            <EventDetails event={props} />
            {props.timeline.length > 0 && <EventTimeline event={props} />}
            {props.speakers.length > 0 && <SpeakerPage event={props} />}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export async function getServerSideProps(context: { params: { slug: any } }) {
  let eventDetails: EventType
  const pageSlug = context.params.slug
  try {
    eventDetails = await getEvent(pageSlug)
  } catch (err) {
    return {
      notFound: true,
    }
  }
  return {
    props: eventDetails[0],
  }
}
export default Events
