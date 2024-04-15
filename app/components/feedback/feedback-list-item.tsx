import parse from 'html-react-parser'
import sanitizeHtml from 'sanitize-html'

import { IFeedback } from '@/app/types'

import Card from '../ui/card'

type TFeedbaclListItemProps = {
  feedback: IFeedback
}

export default async function FeedbaclListItem({ feedback }: TFeedbaclListItemProps) {
  return <Card>{parse(sanitizeHtml(feedback.text))}</Card>
}
