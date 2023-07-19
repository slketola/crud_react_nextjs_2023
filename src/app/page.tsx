import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <title>
        Shopping list
      </title>

      <div>
        Shopping list
      </div>

      <div className='items'>
        <div>
          Items
        </div>
        <div>
          Create new
        </div>
        <div>
          Example item |X||^||R||D|
        </div>
        <div>
          Example item |X||^||R||D|
        </div>
        <div>
          Example item |O||^||R||D|
        </div>

      </div>

      <div>
        <a href='https://www.linkedin.com/in/samialeksiketola'>My LinkedIn</a>
      </div>
    </main>
  )
}
