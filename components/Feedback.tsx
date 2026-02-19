"use client"

import { useState } from "react"

interface FeedbackDict {
    feedback: {
        title: string;
        submit: string;
        success: string;
    }
}

export default function Feedback({ dict }: { dict: FeedbackDict }) {
    const [submitted, setSubmitted] = useState(false)
    const [feedback, setFeedback] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="mt-8 border-t pt-8">
            {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-lg font-medium">{dict.feedback.title}</h3>
                    <textarea
                        className="w-full p-2 border rounded-md dark:bg-slate-800 dark:border-slate-700"
                        rows={3}
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        data-testid="feedback-input"
                        required
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        data-testid="feedback-submit"
                    >
                        {dict.feedback.submit}
                    </button>
                </form>
            ) : (
                <div data-testid="feedback-success-message" className="p-4 bg-green-100 text-green-800 rounded-md dark:bg-green-900 dark:text-green-100">
                    {dict.feedback.success}
                </div>
            )}
        </div>
    )
}
