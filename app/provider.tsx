import Sidebar from "@/components/layout/Sidebar";

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex max-md:flex-col overflow-y-auto overflow-x-hidden">
            <Sidebar />
            <div className="flex h-screen w-full md:w-[62%] space-y-6 flex-col px-2 pt-8 md:pl-6">
                {/* <Header /> */}
                {children}
            </div>
        </div>
    )
}