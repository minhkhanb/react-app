import {getUser} from "../../services/customer";
import {useEffect} from "react";

const Account = () => {
  useEffect(() => {
    console.log('khang3')
    getUser().then(function (respon) {
      console.log('data:', respon)
    })
  }, [])

  return (
    <div>
      <h2>Account</h2>
    </div>
  )
}

export default Account;