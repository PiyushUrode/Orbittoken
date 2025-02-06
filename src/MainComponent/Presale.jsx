
import { FaArrowRightLong } from "react-icons/fa6";
import usdticon from "../assets/PRESALE/usdt.png"
import ORBITicon from "../assets/logo/logo2.png"
import Bnb from "../assets/PRESALE/BNB.png"


const Presale = () => {
   
    return (
        <div className="min-h-screen  flex flex-col items-center justify-center backgroundimg  ">
          
          <div className="relative  w-full h-full  ">
      <p className="text-center text-5xl font-bold text-white uppercase ">
        
        <span className="bg-clip-text text-transparent bg-text-custom-gradient animate-wave">
          PRESALE
        </span>{' '}

      </p>

    </div>


            {/* Main Token Section */}
            <div className="p-[2px] bg-text-custom-gradient rounded-lg  "> 
            <div className="w-full max-w-xl bg-black text-white p-6 rounded-lg shadow-lg  ">
                <h1 className="text-center text-xl md:text-3xl uppercase font-semibold  mb-2 bg-clip-text text-transparent  bg-button-custom-gradient">Orbit TOKEN</h1>
                <p className="text-center text-sm mb-4 font-semibold ">Grab the deal Buy new ORBIT</p>

                {/* Progress Bar */}
                <div className="bg-gray-800 h-7 rounded-2xl mb-2 relative overflow-hidden">
                    <div
                        className="h-full bg-button-custom-gradient rounded-full"
                        style={{ width: "70%" }}
                    > </div>
                </div>
                <div className="flex justify-between items-center align-middle pt-3 text-sm">

                    <span className="">Current price: <br /> $ 0.001</span>
                    <FaArrowRightLong />
                    <span>Next price: <br /> $0.002</span>
                </div>

                {/* Payment Section */}
                <div className="text-center mt-2">
                    <p className="text-lg mb-2 text-white">You can buy with</p>
                    <div className="w-full flex flex-row justify-around items-center space-x-4">
                        {/* USDT Button */}
                        <button className="border-blue-600  border text-white rounded-xl font-bold px-10 py-2 rounded-md flex items-center justify-around space-x-2 relative">
                            <img
                                src={usdticon}
                                alt="USDT Icon"
                                className="w-5 h-5"
                            />
                            <span>USDT</span>
                        </button>

                        {/* BNB Button */}
                        <button className="border-blue-600 border text-white rounded-xl px-10 font-bold  py-2 rounded-md flex items-center space-x-2 relative">
                            <img
                                src={Bnb}
                                alt="BNB Icon"
                                className="w-5 h-5"
                            />
                            <span>BNB</span>
                        </button>
                    </div>

                </div>

                {/* Token Buying Section */}
                <div className="mt-2 text-center">
                    <p className="text-lg mb-4 text-white">Buy ORBIT token Here</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                            <label className="block text-xl mb-2 text-white text-left">You pay</label>
                            <div className="relative   rounded-3xl border border-blue-600  ">

                                <img
                                    src={usdticon}
                                    alt="USDT Icon"
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                                />

                                <input
                                    type="text"
                                    placeholder="Enter USDT Amount"
                                    className=" rounded-3xl  w-full pl-10 pr-3 py-2 bg-[#131111]   outline-none focus:ring-2 focus:ring-yellow-600 text-white placeholder-gray-400"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <label className="block text-xl mb-2 text-white text-left">You Recieve</label>
                            <div className="relative  rounded-3xl border border-blue-600 ">

                                <img
                                    src={ORBITicon}
                                    alt="USDT Icon"
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                                />

                                <input
                                    type="text"
                                    placeholder="Enter ORBIT Amount"
                                    className="w-full  rounded-3xl   pl-10 pr-3 py-2 bg-[#131111]   outline-none focus:ring-2 focus:ring-yellow-500 text-white placeholder-gray-400"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Referral Address */}
                <div className="mt-6">
                    <label className="block text-sm mb-2 text-center">Referral Address</label>
                    <input
                        type="text"
                        placeholder="Enter Referral Address"
                        className="w-full px-3 py-2 bg-[#131111] text-white rounded-md outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-5   items-center justify-between mt-6">
                    <button className=" sm:w-[48%] w-full bg-button-custom-gradient text-black font-bold px-4 py-2 rounded-md">
                        Connect Wallet
                    </button>
                    <button className="sm:w-[48%] w-full border border-blue-500 text-white font-bold px-4 py-2 rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>
            </div>


            {/* <div className="flex flex-col w-full pt-10   md:p-10 overflow-x-scroll md:overflow-hidden">
                <div className="flex flex-col  sm:flex-row gap-5 md:gap-10 mb-5">
                    <button
                        className={`px-8 py-4 text-white font-bold rounded-full ${activeList === "Staking List" ? "bg-yellow-500" : "bg-gray-800"
                            }`}
                        onClick={() => {
                            setActiveList("Staking List");
                            setCurrentPage(1);
                        }}
                    >
                        Staking List
                    </button>
                    <button
                        className={`px-8 py-4 text-white font-bold rounded-full ${activeList === "Referral List" ? "bg-yellow-500" : "bg-gray-800"
                            }`}
                        onClick={() => {
                            setActiveList("Referral List");
                            setCurrentPage(1);
                        }}
                    >
                        Referral List
                    </button>
                </div>


                <table className="table-auto border-collapse border border-gray-300 w-full text-center">
                    <thead>
                        <tr>
                            {activeList === "Staking List" ? (
                                <>
                                    <th className="border p-3">Sr No.</th>
                                    <th className="border p-3">Total Amount</th>
                                    <th className="border p-3">Locked Amount</th>
                                    <th className="border p-3">Buy Date</th>
                                    <th className="border p-3">Next Claim</th>
                                    <th className="border p-3">Claimed</th>
                                    <th className="border p-3">Month</th>
                                    <th className="border p-3">Status</th>
                                </>
                            ) : (
                                <>
                                    <th className="border p-3">Sr No.</th>
                                    <th className="border p-3">Address</th>
                                    <th className="border p-3">Amount</th>
                                    <th className="border p-3">Level</th>
                                </>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((item, index) => (
                            <tr key={index}>
                                <td className="border p-2">
                                    {(currentPage - 1) * itemsPerPage + index + 1}
                                </td>
                                {activeList === "Staking List" ? (
                                    <>
                                        <td className="border p-2">{item.totalAmount} CIP</td>
                                        <td className="border p-2">{item.lockedAmount} CIP</td>
                                        <td className="border p-2">{item.buyDate}</td>
                                        <td className="border p-2">{item.nextClaim}</td>
                                        <td className="border p-2">{item.claimed}</td>
                                        <td className="border p-2">{item.month}</td>
                                        <td className="border p-2">{item.status}</td>
                                    </>
                                ) : (
                                    <>
                                        <td className="border p-2">{item.address}</td>
                                        <td className="border p-2">{item.amount}</td>
                                        <td className="border p-2">{item.level}</td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>


                <div className="flex justify-center items-center gap-3 mt-5">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-500 text-white rounded-md disabled:opacity-50"
                    >
                        Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-3 py-1 rounded-full ${currentPage === index + 1 ? "bg-yellow-500" : "bg-gray-800"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() =>
                            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                        }
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-500 text-white rounded-md disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div> */}
        </div>
    );
};

export default Presale;
