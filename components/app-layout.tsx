'use client'

import React from 'react'
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Search, Settings, User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { VeltSidebarButton } from '@veltdev/react'

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar className="border-r">
          <SidebarHeader className="px-4 py-3">
            <h2 className="text-lg font-semibold">Questionnaire</h2>
          </SidebarHeader>
          <SidebarContent>
            <nav className="space-y-1 px-2">
              <Button variant="ghost" className="w-full justify-start gap-2 px-2">
                <Search className="h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 px-2">
                <User className="h-4 w-4" />
                Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 px-2">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </nav>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="User avatar" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">User Name</span>
                <span className="text-xs text-muted-foreground">user@example.com</span>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="flex flex-1 flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-background w-full">
            <div className="flex flex-1 items-center gap-4 px-4">
              <SidebarTrigger />
              <div className="flex flex-1 items-center gap-4">
                <div className="relative w-[400px]">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search..." 
                    className="pl-8 w-full"
                  />
                </div>
                <div>
                  <VeltSidebarButton className="ml-auto" />
                </div>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Notifications</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Settings className="h-4 w-4" />
                  <span className="sr-only">Settings</span>
                </Button>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-auto px-4 py-6">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

export default AppLayout

