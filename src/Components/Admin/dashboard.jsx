function Dashboard(){
    return(
        <section className="">
          <div className="invoice-table-row invoice-table-header bg-white mt-10 rounded-xl px-10  py-4 flex items-center gap-x-3 text-sm font-semibold  text-gray-600">
            <div className="text-left">sl no.</div>
            <div className="text-left">Tutor name</div>
            <div className="text-center">No. of Coourses</div>
            <div className="text-center ">Rating</div>
            <div className="text-right">Total</div>
            <div className="flex-1  text-center">Status</div>
          </div>

          <div className="bg-white mt-5 rounded-xl text-sm  text-gray-500 divide-y divide-indigo-50 overflow-x-auto  shadow">
            <div className="invoice-table-row flex items-center gap-x-3 px-10 py-4">
              <div className="text-left ">12</div>
              <div className="text-left">John Doe</div>
              <div className="text-center">2019/11/20</div>
              <div className="text-center">2019/12/20</div>
              <div className="text-right">$10.00</div>
              <div className="text-center ">
                <span className="px-4 py-1 rounded-lg bg-rose-400  text-white">
                  Draft
                </span>
              </div>
            </div>

            <div className="invoice-table-row flex items-center gap-x-3 px-10 py-4">
              <div className="text-left">13</div>
              <div className="text-left">Thomas Bride</div>
              <div className="text-center">2019/11/20</div>
              <div className="text-center">2019/12/20</div>
              <div className="text-right">$670.00</div>
              <div className="text-center ">
                <span className="px-4 py-1 rounded-lg bg-indigo-400  text-white">
                  Paid
                </span>
              </div>
            </div>

            <div className="invoice-table-row flex items-center gap-x-3 px-10 py-4">
              <div className="text-left">14</div>
              <div className="text-left">Ellen Bean</div>
              <div className="text-center">2019/11/20</div>
              <div className="text-center">2019/12/20</div>
              <div className="text-right">$1032.00</div>
              <div className="text-center ">
                <span className="px-4 py-1 rounded-lg bg-rose-400  text-white">
                  Draft
                </span>
              </div>
            </div>

            <div className="invoice-table-row flex items-center gap-x-3 px-10 py-4 bg-indigo-50">
              <div className="text-left">15</div>
              <div className="text-left">Jack Sanders</div>
              <div className="text-center">2020/11/20</div>
              <div className="text-center">2020/12/20</div>
              <div className="text-right">$590.00</div>
              <div className="text-center ">
                <span className="px-4 py-1 rounded-lg bg-indigo-400  text-white">
                  Paid
                </span>
              </div>
            </div>

            <div className="invoice-table-row flex items-center gap-x-3 px-10 py-4">
              <div className="text-left">16</div>
              <div className="text-left">Leslie Ive</div>
              <div className="text-center">2020/11/20</div>
              <div className="text-center">2020/12/20</div>
              <div className="text-right">$230.00</div>
              <div className="text-center ">
                <span className="px-4 py-1 rounded-lg bg-rose-400  text-white">
                  Draft
                </span>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Dashboard;