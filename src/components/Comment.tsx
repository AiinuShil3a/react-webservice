import React from 'react'

interface Props {
    userId: string;
    message: string;
  }
  

export const Comment: React.FC<Props> = (props) => { //FC = React.FunctionComponent
  return (
    <div className='dialogbox'>
         <div className='message'>
            <span>
                <b>
                    {
                        props.userId
                    }
                </b> - {props.message}
            </span>
         </div>
    </div>
  )
}

