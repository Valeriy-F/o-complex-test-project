import { getFeedbacks } from '@/app/api/api'
import { IFeedback } from '@/app/types'

import FeedbaclListItem from './feedback-list-item'

export default async function FeedbaclList() {
  const feedbacks: IFeedback[] = await getFeedbacks()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
      {feedbacks.map((feedback) => (
        <FeedbaclListItem key={feedback.id} feedback={feedback} />
      ))}
    </div>
  )
}
