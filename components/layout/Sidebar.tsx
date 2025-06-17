'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Package, BarChart3, Settings, LogOut, User, Menu, X } from 'lucide-react';

const Sidebar = () => {
    const [isProductsOpen, setIsProductsOpen] = useState(true);
    const [isManageOpen, setIsManageOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-gray-800 text-white flex flex-col transition-all duration-300 fixed left-0 top-0 h-screen z-50`}>
            {/* Header */}
            <div className="p-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                    {!isCollapsed && (
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-600 rounded-full mr-3 flex items-center justify-center flex-shrink-0">
                                <User className="w-4 h-4" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-400 uppercase">INSTRUCTOR</div>
                                <div className="text-sm font-medium">Krishna Kumar</div>
                            </div>
                        </div>
                    )}

                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="p-1 rounded hover:bg-gray-700 transition-colors ml-auto flex-shrink-0"
                    >
                        {isCollapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
                    </button>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 p-4 overflow-y-auto">
                <div className="mb-6">
                    {!isCollapsed && (
                        <div className="text-xs text-gray-400 uppercase mb-3">MAIN</div>
                    )}

                    {/* Products */}
                    <div className="mb-2">
                        <button
                            onClick={() => !isCollapsed && setIsProductsOpen(!isProductsOpen)}
                            className="flex items-center w-full text-left py-2 px-2 rounded hover:bg-gray-700 transition-colors"
                            title={isCollapsed ? "Products" : ""}
                        >
                            <Package className="w-4 h-4 mr-3 flex-shrink-0" />
                            {!isCollapsed && (
                                <>
                                    <span className="text-sm">Products</span>
                                    {isProductsOpen ?
                                        <ChevronDown className="w-4 h-4 ml-auto" /> :
                                        <ChevronRight className="w-4 h-4 ml-auto" />
                                    }
                                </>
                            )}
                        </button>

                        {!isCollapsed && isProductsOpen && (
                            <div className="ml-7 mt-1">
                                <div className="flex items-center py-2 px-2 text-sm text-gray-300 hover:bg-gray-700 rounded cursor-pointer">
                                    <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                                    Courses
                                </div>
                                <div className="flex items-center py-2 px-2 text-sm text-gray-300 hover:bg-gray-700 rounded cursor-pointer">
                                    <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                                    Packages
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Manage */}
                    <div className="mb-2">
                        <button
                            onClick={() => !isCollapsed && setIsManageOpen(!isManageOpen)}
                            className="flex items-center w-full text-left py-2 px-2 rounded hover:bg-gray-700 transition-colors"
                            title={isCollapsed ? "Manage" : ""}
                        >
                            <Settings className="w-4 h-4 mr-3 flex-shrink-0" />
                            {!isCollapsed && (
                                <>
                                    <span className="text-sm">Manage</span>
                                    {isManageOpen ?
                                        <ChevronDown className="w-4 h-4 ml-auto" /> :
                                        <ChevronRight className="w-4 h-4 ml-auto" />
                                    }
                                </>
                            )}
                        </button>
                    </div>

                    {/* Reports */}
                    <div className="mb-2">
                        <div
                            className="flex items-center py-2 px-2 rounded hover:bg-gray-700 transition-colors cursor-pointer"
                            title={isCollapsed ? "Reports" : ""}
                        >
                            <BarChart3 className="w-4 h-4 mr-3 flex-shrink-0" />
                            {!isCollapsed && <span className="text-sm">Reports</span>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-700">
                <button
                    className="flex items-center w-full text-left py-2 px-2 rounded hover:bg-gray-700 transition-colors text-sm"
                    title={isCollapsed ? "Logout Account" : ""}
                >
                    <LogOut className="w-4 h-4 mr-3 flex-shrink-0" />
                    {!isCollapsed && "Logout Account"}
                </button>
            </div>
        </div>
    );
};

export default Sidebar;