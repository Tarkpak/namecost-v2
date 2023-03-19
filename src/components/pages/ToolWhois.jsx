import { Faqs } from '@/components/pages/Faqs'


export function ToolWhois() {
  return (
    <div className="min-h-full px-4 sm:px-6  md:grid md:place-items-center lg:px-8 relative">
      <div className=" mx-auto min-w-full">
        <main>
          <div className="max-w-5xl mx-auto pb-24 px-4 sm:px-6 lg:px-8">
        
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
              <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div  className="text-center text-3xl font-medium max-w-7xl mx-auto py-4 text-gray-700">
                  <span>Domain Broker Service</span>
                </div>
                <div className="text-center">
                  <span>Get the domain you really want, even if it's already owned.</span>
                </div>
                <div className="text-lg text-center py-12">
                  <span>That perfect domain you want — that's taken by someone else — could still be yours. A NameCost broker can work with the domain name registry to find and negotiate with the current owner to get the name for you.</span>
                </div>
                <div><img  className="mx-auto" src="/images/buyers.svg" /></div>
              </div>
            </div>
            <Faqs />
          </div>


        </main>
      </div>
    </div>
  )
}

