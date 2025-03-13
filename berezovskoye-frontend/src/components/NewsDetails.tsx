"use client"

import React, {useState} from 'react';
import Image from "next/image";
import {News} from "@/database";
import {useAuth} from "@/lib/hooks";
import TextareaAutosize from "react-textarea-autosize";

// from dd.mm.yyyy to yyyy-mm-dd
export const convertToDateInputFormat = (date: string) => {
    const [day, month, year] = date.split('.');
    return `${year}-${month}-${day}`;
};

// from yyyy-mm-dd to dd.mm.yyyy
export const convertToDisplayFormat = (date: string) => {
    const [year, month, day] = date.split('-');
    return `${day}.${month}.${year}`;
};

interface NewsDetailsProps {
    news: News | null;
    onSave: (news: News) => void;
}

export default function NewsDetails({news, onSave}: NewsDetailsProps) {
    const {isAuthenticated} = useAuth();

    const [isEditing, setIsEditing] = useState(false);

    const todayIsoDate = new Date().toISOString().slice(0, 10);
    const defaultNews = {
        id: news?.id || -1,
        title: news?.title || "Пример заголовка",
        text: news?.text || "Пример текста",
        postingDate: news?.postingDate || convertToDisplayFormat(todayIsoDate),
        imgUrl: news?.imgUrl || "/placeholder.svg",
    };

    const [title, setTitle] = useState(defaultNews.title);
    const [text, setText] = useState(defaultNews.text);
    const [postingDate, setPostingDate] = useState(defaultNews.postingDate);

    const handleSave = () => {
        const updatedNews = {...defaultNews, title, text, postingDate};
        onSave(updatedNews);

        setIsEditing(false);
    };

    const handleCancel = () => {
        setTitle(defaultNews.title);
        setText(defaultNews.text);
        setPostingDate(defaultNews.postingDate);

        setIsEditing(false);
    }

    const onEditPhoto = () => {
        console.log("edit photo")
    }

    return (
        <div className="flex flex-col items-start justify-between gap-2 bg-white p-1 sm:p-2.5">
            {
                isAuthenticated && (
                    <div className="mb-2 flex gap-2">
                        {isEditing
                            ?
                            <>
                                <button
                                    onClick={handleCancel}
                                    className="rounded bg-blue-500 px-4 py-2 text-white"
                                >
                                    Отменить
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="rounded bg-green-500 px-4 py-2 text-white"
                                >
                                    Сохранить
                                </button>
                            </>
                            :
                            <button
                                onClick={() => setIsEditing(true)}
                                className="rounded bg-blue-500 px-4 py-2 text-white"
                            >
                                Редактировать
                            </button>
                        }
                    </div>
                )
            }

            {
                isEditing ? (
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border p-2 text-2xl"
                    />
                ) : (
                    <h2 className="text-2xl">
                        {title}
                    </h2>
                )}

            <div className="relative aspect-[7/2] w-full">
                <Image
                    src={defaultNews.imgUrl}
                    fill={true}
                    style={{objectFit: "cover"}}
                    alt="News Image"
                    className="select-none"
                />
                {
                    isEditing &&
                    <button
                        onClick={onEditPhoto}
                        className="absolute right-2 top-2 p-4">
                        <Image
                            src="/edit.svg"
                            alt="изменить"
                            fill={true}
                        />
                    </button>
                }
                <div className="absolute bottom-2 right-2 bg-black/50 px-2 py-1">
                    {
                        isEditing ? (
                            <input
                                type="date"
                                value={convertToDateInputFormat(postingDate)}
                                onChange={(e) => setPostingDate(convertToDisplayFormat(e.target.value))}
                                className="bg-transparent text-base font-bold invert"
                            />
                        ) : (
                            <div className="text-base font-bold text-white">
                                {postingDate}
                            </div>
                        )
                    }
                </div>
            </div>

            {
                isEditing ? (
                    <TextareaAutosize
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="w-full border p-2 text-base"
                        minRows={1}
                    />
                ) : (
                    <p className="text-base">
                        {text}
                    </p>
                )
            }
        </div>
    );
}