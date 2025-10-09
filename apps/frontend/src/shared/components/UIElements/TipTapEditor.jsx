import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyleKit } from "@tiptap/extension-text-style";
import { EditorContent, useEditor, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import {
  Italic as ItalicIcon,
  Bold as BoldIcon,
  Underline as UnderlineIcon,
  Strikethrough as StrikethroughIcon,
  Highlighter as HighlighterIcon,
  SeparatorHorizontal as SeparatorHorizontalIcon,
  Quote as QuoteIcon,
  List as ListIcon,
  ListOrdered as ListOrderedIcon,
  Undo as UndoIcon,
  Redo as RedoIcon,
  Heading1 as Heading1Icon,
  Heading2 as Heading2Icon,
  Heading3 as Heading3Icon,
  Image as ImageIcon,
} from "lucide-react";

function ToolBar({ editor }) {
  if (!editor) {
    return null;
  }

  const editorState = useEditorState({
    editor,
    selector: (ctx) => ({
      isBold: ctx.editor.isActive("bold"),
      isItalic: ctx.editor.isActive("italic"),
      isStrike: ctx.editor.isActive("strike"),
      isParagraph: ctx.editor.isActive("paragraph"),
      isHeading1: ctx.editor.isActive("heading", { level: 1 }),
      isHeading2: ctx.editor.isActive("heading", { level: 2 }),
      isHeading3: ctx.editor.isActive("heading", { level: 3 }),
      isBulletList: ctx.editor.isActive("bulletList"),
      isOrderedList: ctx.editor.isActive("orderedList"),
      isBlockquote: ctx.editor.isActive("blockquote"),

      canUndo: ctx.editor.can().chain().undo().run(),
      canRedo: ctx.editor.can().chain().redo().run(),
    }),
  });

  return (
    <div className="flex flex-wrap gap-1 mb-4">
      <button
        className={
          editorState.isParagraph
            ? "btn btn-sm btn-primary"
            : "btn btn-sm btn-ghost"
        }
        onClick={() => editor.chain().focus().setParagraph().run()}
      >
        P
      </button>

      <button
        className={
          editorState.isHeading1
            ? "btn-sm btn btn-primary"
            : "btn btn-sm btn-ghost"
        }
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        <Heading1Icon />
      </button>

      <button
        className={
          editorState.isHeading2
            ? "btn btn-sm btn-primary"
            : "btn btn-sm btn-ghost"
        }
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <Heading2Icon />
      </button>

      <button
        className={
          editorState.isHeading3
            ? "btn btn-sm btn-primary"
            : "btn btn-sm btn-ghost"
        }
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        <Heading3Icon />
      </button>

      <button
        className={
          editorState.isBold ? "btn btn-sm btn-primary" : "btn btn-sm btn-ghost"
        }
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <BoldIcon />
      </button>

      <button
        className={
          editorState.isItalic
            ? "btn btn-sm btn-primary"
            : "btn btn-sm btn-ghost"
        }
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <ItalicIcon />
      </button>

      <button
        className="btn btn-sm btn-ghost"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <UnderlineIcon />
      </button>

      <button
        className={
          editorState.isStrike
            ? "btn btn-sm btn-primary"
            : "btn btn-sm btn-ghost"
        }
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <StrikethroughIcon />
      </button>

      <button
        className="btn btn-sm btn-ghost"
        onClick={() => editor.chain().focus().toggleHighlight().run()}
      >
        <HighlighterIcon />
      </button>

      <button
        className="btn btn-sm btn-ghost"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <SeparatorHorizontalIcon />
      </button>

      <button
        className={
          editorState.isBlockquote
            ? "btn btn-sm btn-primary "
            : "btn btn-sm btn-ghost"
        }
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <QuoteIcon />
      </button>

      <button
        className={
          editorState.isBulletList
            ? "btn btn-sm btn-primary"
            : "btn btn-sm btn-ghost"
        }
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <ListIcon />
      </button>

      <button
        className={
          editorState.isOrderedList
            ? "btn btn-sm btn-primary"
            : "btn btn-sm btn-ghost"
        }
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrderedIcon />
      </button>

      <button
        className="btn btn-sm btn-ghost"
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-text-align-start-icon lucide-text-align-start"
        >
          <path d="M21 5H3" />
          <path d="M15 12H3" />
          <path d="M17 19H3" />
        </svg>
      </button>

      <button
        className="btn btn-sm btn-ghost"
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-text-align-center-icon lucide-text-align-center"
        >
          <path d="M21 5H3" />
          <path d="M17 12H7" />
          <path d="M19 19H5" />
        </svg>
      </button>

      <button
        className="btn btn-sm btn-ghost"
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-text-align-end-icon lucide-text-align-end"
        >
          <path d="M21 5H3" />
          <path d="M21 12H9" />
          <path d="M21 19H7" />
        </svg>
      </button>

      <button
        className="btn btn-sm btn-ghost"
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-text-align-justify-icon lucide-text-align-justify"
        >
          <path d="M3 5h18" />
          <path d="M3 12h18" />
          <path d="M3 19h18" />
        </svg>
      </button>

      <ul class="menu lg:menu-sm pt-0">
        <li>
          <details open>
            <summary>
              <ImageIcon />
            </summary>
            <ul>
              <li>
                <a>URL</a>
              </li>
              <li>
                <a>File</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>

      <button
        onClick={() => editor.chain().focus().undo().run()}
        className="btn btn-sm btn-ghost"
        disabled={!editorState.canUndo}
      >
        <UndoIcon />
      </button>

      <button
        onClick={() => editor.chain().focus().redo().run()}
        className="btn btn-sm btn-ghost"
        disabled={!editorState.canRedo}
      >
        <RedoIcon />
      </button>
    </div>
  );
}

function TipTapEditor({ onChange, value }) {
  const editor = useEditor({
    extensions: [
      Highlight,
      TextStyleKit,
      StarterKit,
      TextAlign.configure({
        type: ["heading", "paragraph"],
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="border p-4 rounded space-4">
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

export default TipTapEditor;
