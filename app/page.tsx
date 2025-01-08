'use client'

import AppLayout from '@/components/app-layout'
import SimpleForm from '@/components/simple-form'
import AuthComponent from '@/components/auth-component'
import VeltWireframeComponent from '@/components/velt-wireframe'
import { VeltComments, VeltProvider, VeltCommentsSidebar } from '@veltdev/react';

export default function Home() {
  return (
    <VeltProvider apiKey="0oIhv22wimDLaFU67BTP">
      <AppLayout>
        <AuthComponent />
        <div className="mt-8">
          <SimpleForm />
        </div>
        <VeltWireframeComponent />
        <VeltComments popoverMode={true} commentPinHighlighter={false} popoverTriangleComponent={false} />
        <VeltCommentsSidebar />
      </AppLayout>
    </VeltProvider>
  )
}

