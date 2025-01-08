import {
  VeltWireframe,
  VeltCommentToolWireframe,
  VeltCommentBubbleWireframe,
  VeltIf,
  VeltSidebarButtonWireframe
} from '@veltdev/react';
import Image from 'next/image';

export default function VeltWireframeComponent() {
  return (
    <VeltWireframe>
      <VeltCommentToolWireframe>
        <div className="relative w-8 h-8">
          <button 
            className="absolute right-0 flex items-center justify-center w-8 h-8 hover:bg-gray-100 transition-colors"
            aria-label="Add comment"
          >
            <Image
              src="/comment-icon.svg"
              alt="Comment"
              width={16}
              height={16}
              className="text-gray-600"
            />
          </button>
        </div>
      </VeltCommentToolWireframe>

      <VeltCommentBubbleWireframe>
        <div className="relative w-8 h-8">
          <button 
            className="absolute right-0 flex items-center justify-center w-8 h-8 hover:bg-gray-100 transition-colors"
            aria-label="View comments"
          >
              <VeltIf condition="{commentAnnotation.comments.length} > 0">
                <div className="flex items-center gap-1">
                  <VeltCommentBubbleWireframe.CommentsCount />
                <Image
                  src="/comment-icon.svg"
                  alt="Comment"
                  width={16}
                  height={16}
                  className="text-gray-600"
                />
              </div>
            </VeltIf>

            <VeltIf condition="{commentAnnotation.comments.length} === 0">
                <Image
                  src="/comment-icon.svg"
                  alt="Comment"
                  width={16}
                  height={16}
                  className="text-gray-600"
                />
            </VeltIf>
          </button>
        </div>
      </VeltCommentBubbleWireframe>

      <VeltSidebarButtonWireframe>
        <div className="relative w-auto">
          <button className="flex items-center justify-center h-8 min-w-[32px] px-3 border border-gray-200 hover:bg-gray-100 transition-colors gap-1">
          <VeltSidebarButtonWireframe.CommentsCount />
              <Image
                src="/comment-icon.svg"
                alt="Comment"
                width={16}
                height={16}
                className="text-gray-600 flex-shrink-0"
              />
          </button>
        </div>
      </VeltSidebarButtonWireframe>

    </VeltWireframe>
  );
} 