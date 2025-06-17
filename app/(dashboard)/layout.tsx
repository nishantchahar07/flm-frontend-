import Sidebar from "@/components/layout/Sidebar";

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex w-full">
            <Sidebar />
            <div className="">
                {children}
            </div>
        </div>
    )
}