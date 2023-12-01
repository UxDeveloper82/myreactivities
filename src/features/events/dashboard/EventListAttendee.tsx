import { Attendee } from '../../../app/types/event'
import { List, Image} from 'semantic-ui-react'

type Props = {
    attendee: Attendee
}

function EventListAttendee({attendee}: Props) {
  return (
    <List.Item>
        <Image size='mini' circular src={attendee.photoURL}/>
    </List.Item>
  )
}

export default EventListAttendee
