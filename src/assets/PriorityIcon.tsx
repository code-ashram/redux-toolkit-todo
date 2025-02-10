import { FC } from 'react'
import { Priority } from '../models'

type Props = {
  priority: Priority
}

const PriorityIcon: FC<Props> = ({ priority }) => {
  let color: string

  switch (priority) {
    case Priority.High:
      color = '#f31260'
      break
    case Priority.Low:
      color = '#17c964'
      break
    default:
      color = '#f5a524'
  }

  return (
    <svg fill={color} width="28px" height="28px" viewBox="0 0 36 36" version="1.1"
         preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" >
      <title>circle-solid</title>
      <path d="M18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Z" className="clr-i-solid clr-i-solid-path-1"></path>
      <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
    </svg>
  )
}

export default PriorityIcon
