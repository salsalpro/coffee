import Navbar from '@/src/components/module/Navbar/Navbar'
import Footer from '@/src/components/module/Footer/Footer'
import Steper from '@/src/components/module/cart/Steper'
import Table from '@/src/components/module/cart/Table'
import stateData from '@/models/StateData'
import connectToDB from '@/config/db'

export default async function page() {

  await connectToDB()
  const stateOptionsGot = await stateData.findOne({_id:'67a35da82d4629b506520f69'})
  const {stateOptions} = JSON.parse(JSON.stringify(stateOptionsGot))


  return (
    <div>
      <Navbar with_bg={true} />

      <div className="min-h-64 bg-19 p-14 flex justify-center flex-col mt-74 relative">
        <h1 className={`titleLine`}>سبد خرید</h1>
        <Steper step={'cart'} />
        <Table stateOptions={stateOptions} />
      </div>

      <Footer />
    </div>
  )
}
