import React from 'react'
import Svg, { Path } from 'react-native-svg'

type Props = {
  fill: string
}

export const AccountIcon = ({ fill }: Props) => {
  return (
    <Svg style={{ marginTop: 5 }} width='22' height='23' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M7.798 2.5C4.577 2.5 2 5.055 2 8.167v6.666C2 17.945 4.577 20.5 7.798 20.5h6.405c3.22 0 5.798-2.555 5.797-5.666V8.167C20 5.055 17.423 2.5 14.202 2.5H7.798ZM0 8.167C0 3.914 3.51.5 7.798.5h6.404C18.491.5 22 3.914 22 8.167v6.666c.001 4.253-3.51 7.667-7.797 7.667H7.798C3.509 22.5 0 19.086 0 14.833V8.167Zm8.735-.445a1 1 0 0 1 1 1v1.111a1 1 0 0 1-2 0v-1.11a1 1 0 0 1 1-1Zm4.532 0a1 1 0 0 1 1 1v1.111a1 1 0 0 1-2 0v-1.11a1 1 0 0 1 1-1Z'
        fill={fill}
      />
      <Path
        d='M11 14.389c-1.04 0-1.88-.306-2.462-.613l-.85-.571a1 1 0 0 0-1.41.034c-.585.61-.348 1.158.397 1.719A7.266 7.266 0 0 0 11 16.389c1.44 0 2.592-.424 3.383-.847.396-.212.705-.425.92-.59l.01-.008c.123-.094.256-.196.366-.303a.995.995 0 0 0 0-1.41c-.534-.545-1.115-.233-1.594.135a5.158 5.158 0 0 1-3.085 1.023Z'
        fill={fill}
      />
    </Svg>
  )
}
