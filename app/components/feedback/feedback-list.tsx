import { IFeedback } from '@/app/types'
import FeedbaclListItem from './feedback-list-item'

export default async function FeedbaclList() {
  const response = await fetch(`http://o-complex.com:1337/reviews`)
  const feedbacks: IFeedback[] = await response.json()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
      {feedbacks.map((feedback) => (
        <FeedbaclListItem key={feedback.id} feedback={feedback} />
      ))}
    </div>
  )
}
