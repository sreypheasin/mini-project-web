import React from 'react'

export default function MoreProfile({avatar}) {
  return (
    <div className="avatar-group -space-x-8 ">
  <div className="avatar" style={{height:"100px"}}>
    <div className="w-24 rounded-full">
      <img src={avatar? avatar: "https://i.pinimg.com/736x/7d/ce/3d/7dce3de08fd3aceeb2d6fd454f4b3676.jpg"} alt='avatar'/>
    </div>
  </div>
  <div className="avatar " style={{height:"100px"}}>
    <div className="w-24 rounded-full">
      <img src={avatar? avatar: "https://i.pinimg.com/736x/7d/ce/3d/7dce3de08fd3aceeb2d6fd454f4b3676.jpg"} alt='avatar'/>
    </div>
  </div>
  {/* <div className="avatar">
    <div className="w-12">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div> */}
  <div className="avatar placeholder" style={{height:"100px"}}>
    <div className="w-24 rounded-full bg-neutral-focus text-neutral-content">
      <span>+99</span>
    </div>
  </div>
</div>
  )
}
