
export default function Test() {
    return (
        <main className="space-y-6">
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    Testing Environment
                </h1>
                <p className="text-gray-600 text-sm">
                    Enter your call information below
                </p>
            </div>

            <form className="space-y-4">
                <div className="space-y-2">
                    <label 
                        htmlFor="callType" 
                        className="block text-sm font-medium text-gray-700"
                    >
                        Call Type
                    </label>
                    <input 
                        id="callType" 
                        name="callType" 
                        type="text"
                        placeholder="Enter call type..."
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all duration-200 hover:border-gray-400"
                    />
                </div>

                <div className="space-y-2">
                    <input 
                        type="text"
                        placeholder="Next field"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all duration-200 hover:border-gray-400"
                    />
                </div>
            </form>
        </main>
    );
}