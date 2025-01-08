'use client'

import React, { useEffect } from 'react'
import { useId } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  VeltCommentTool,
  VeltCommentBubble,
  useSetDocument,
  useContactUtils
} from '@veltdev/react';

const DOCUMENT_ID = 'reflective-questionnaire';

const questions = [
  { id: "skill", text: "What skill would you instantly master if you could?" },
  { id: "history", text: "Which historical period would you choose to live in?" },
  { id: "challenge", text: "What's the biggest global challenge you would solve first?" },
  { id: "perfect-day", text: "Describe your perfect day in one sentence." },
  { id: "life-lesson", text: "What's the most important life lesson you've learned?" },
  { id: "advice", text: "What advice would you give to your younger self?" },
  { id: "place", text: "Name a place you've never visited but feel drawn to." },
  { id: "technology", text: "What future technology are you most excited about?" },
  { id: "career", text: "What would be your ideal career combination?" },
  { id: "legacy", text: "What legacy do you want to leave behind?" }
]

export default function SimpleForm() {
  const idPrefix = useId()

  // Set the document ID for Velt
  useSetDocument(DOCUMENT_ID, {
    documentName: 'Reflective Questionnaire Form'
  });

  const contactElement = useContactUtils();

  useEffect(() => {
    // Disable @here from the contacts dropdown in Velt
    if (contactElement) {
      contactElement.disableAtHere();
    }
  }, [contactElement]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Reflective Questionnaire</h1>
        <p className="text-muted-foreground">
          Take your time to think deeply about each question. Your thoughtful responses help us understand you better.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {questions.map((question) => (
          <div key={question.id} className="space-y-2">
            <div className="flex items-start justify-between gap-4">
              <Label 
                htmlFor={`${idPrefix}-${question.id}`}
                className="text-base font-medium flex-grow"
              >
                {question.text}
              </Label>
              <div>
                <VeltCommentTool
                  targetElementId={`${idPrefix}-${question.id}`}
                />
                <VeltCommentBubble
                  targetElementId={`${idPrefix}-${question.id}`}
                />
              </div>
            </div>
            <Input 
              type="text" 
              id={`${idPrefix}-${question.id}`} 
              placeholder="Share your thoughts..."
              className="h-12"
            />
          </div>
        ))}
      </form>
    </div>
  )
}

