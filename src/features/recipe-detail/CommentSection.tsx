"use client";

import React, { useCallback, useEffect, useState } from "react";
import { MoreVertical, Pencil, Trash2, User } from "lucide-react";
import Swal from "sweetalert2";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import api, { getApiErrorMessage } from "@/utils/api";
import { RecipeCommentType, RecipeDetailType } from "@/types/type";

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function CommentItem({
  comment,
  recipeId,
  onEdit,
  onDelete,
}: {
  comment: RecipeCommentType;
  recipeId: number;
  onEdit: (commentId: number, message: string) => Promise<boolean>;
  onDelete: (commentId: number) => Promise<void>;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState(comment.message);
  const [saving, setSaving] = useState(false);

  const startEditing = () => {
    setMessage(comment.message);
    setIsEditing(true);
  };

  const handleSave = async () => {
    const trimmed = message.trim();
    if (!trimmed || saving) return;
    setSaving(true);
    const success = await onEdit(comment.id, trimmed);
    setSaving(false);
    if (success) setIsEditing(false);
  };

  return (
    <div className="flex gap-3 bg-white rounded-xl p-3">
      <span className="flex items-center justify-center h-10 w-10 shrink-0 rounded-full bg-orange-200 text-orange-700">
        <User size={18} />
      </span>

      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center gap-2">
          <h2 className="text-sm font-semibold text-slate-800">
            User {comment.user_id}
          </h2>
          <div className="flex items-center gap-1">
            <p className="text-xs text-slate-500 shrink-0">
              {formatDate(comment.created_at)}
            </p>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <button
                  aria-label="Comment options"
                  className="flex items-center justify-center h-7 w-7 rounded-md text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  <MoreVertical size={16} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                updatePositionStrategy="optimized"
              >
                <DropdownMenuItem onSelect={startEditing}>
                  <Pencil size={14} className="mr-2" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-red-600"
                  onSelect={() => onDelete(comment.id)}
                >
                  <Trash2 size={14} className="mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {isEditing ? (
          <div className="mt-1">
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full h-20 border-slate-400 border bg-white text-slate-800 rounded-xl text-sm p-3 outline-none focus:border-slate-700"
            />
            <div className="flex justify-end items-center gap-2 mt-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={handleSave}
                disabled={saving}
                className="bg-slate-800 hover:bg-slate-900 disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save"}
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-sm text-slate-800 mt-1 break-words">
            {comment.message}
          </p>
        )}
      </div>
    </div>
  );
}

export default function CommentSections({
  recipeId,
  comments: initialComments = [],
}: {
  recipeId?: number;
  comments?: RecipeCommentType[];
}) {
  const [comments, setComments] =
    useState<RecipeCommentType[]>(initialComments);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setComments(initialComments);
  }, [initialComments]);

  const refreshComments = useCallback(async () => {
    if (!recipeId) return;
    try {
      const response = await api.get<RecipeDetailType>(
        `/recipes/details/${recipeId}`,
      );
      setComments(response.data.comments);
    } catch {
      /* ignore, keep current list */
    }
  }, [recipeId]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = message.trim();
    if (!recipeId || !trimmed || submitting) return;

    setSubmitting(true);
    setError(null);

    try {
      await api.post(`/recipes/comment/${recipeId}`, { message: trimmed });
      setMessage("");
      await refreshComments();
    } catch (err) {
      setError(
        getApiErrorMessage(err, "Failed to post comment. Please try again."),
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleEditComment = async (
    commentId: number,
    newMessage: string,
  ): Promise<boolean> => {
    if (!recipeId) return false;
    try {
      await api.put(`/recipes/comment/${recipeId}/edit/${commentId}`, {
        message: newMessage,
      });
      await refreshComments();
      return true;
    } catch (error) {
      await Swal.fire({
        title: "Error",
        text: getApiErrorMessage(error, "Failed to edit comment."),
        icon: "error",
        confirmButtonText: "Ok",
      });
      return false;
    }
  };

  const handleDeleteComment = async (commentId: number) => {
    if (!recipeId) return;
    const result = await Swal.fire({
      title: "Delete comment?",
      text: "You won't be able to undo this.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    });
    if (!result.isConfirmed) return;

    try {
      await api.delete(`/recipes/uncomment/${recipeId}/${commentId}`);
      await refreshComments();
    } catch (error) {
      await Swal.fire({
        title: "Error",
        text: getApiErrorMessage(error, "Failed to delete comment."),
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <div className="px-2 mt-10">
      <div className=" bg-orange-100 rounded-xl p-4">
        {/* Header */}
        <div className="flex items-center gap-2">
          <h1 className="text-xl text-gray-800 font-bold">Comments</h1>
          <div className="flex justify-center items-center h-8 w-8 bg-gray-700 text-white rounded-full text-sm">
            {comments.length}
          </div>
        </div>

        {/* Add comment */}
        <form onSubmit={handleSubmit} className="mt-4">
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Add a comment..."
            className="w-full h-20 border-slate-400 border-2 bg-white text-slate-800 rounded-xl text-sm p-3 outline-none focus:border-slate-700"
          />
          {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
          <div className="flex justify-end items-center mt-2">
            <Button
              type="submit"
              disabled={submitting}
              className="bg-red-500 hover:bg-red-600 disabled:opacity-60"
            >
              {submitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>

        {/* Comment list */}
        {comments.length > 0 ? (
          <div className="mt-4 flex flex-col gap-3">
            {comments.map((comment) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                recipeId={Number(recipeId)}
                onEdit={handleEditComment}
                onDelete={handleDeleteComment}
              />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm text-slate-500">No comments yet.</p>
        )}
      </div>
    </div>
  );
}
