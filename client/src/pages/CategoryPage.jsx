import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [downloadProgress, setDownloadProgress] = useState({});

  // Real data for frontend category
  const categoryNotes = {
    frontend: [
      {
        id: 1,
        title: "React Fundamentals Notes",
        description:
          "Comprehensive guide to React fundamentals covering components, JSX, state, props, and advanced concepts with practical examples and best practices.",
        downloads: 20,
        fileSize: "50 MB",
        level: "Advanced",
        author: "Sai Prithvi",
        lastUpdated: "2024-01-15",
        fileName: "React Fundamentals Notes - Sai Prithvi.pdf",
      },
    ],
  };

  const notes = categoryNotes[categoryId] || [];

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.author.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const parseFileSize = (fileSize) => {
    const match = fileSize.match(/(\d+(\.\d+)?)\s*(\w+)/);
    if (match) {
      return {
        size: parseFloat(match[1]),
        unit: match[3],
      };
    }
    return { size: 0, unit: "MB" };
  };

  const formatFileSize = (size, unit) => {
    return `${size} ${unit}`;
  };

  const calculateCurrentSize = (note, progress) => {
    const fileInfo = parseFileSize(note.fileSize);
    const currentSize = (progress / 100) * fileInfo.size;
    return {
      current: currentSize.toFixed(1),
      total: fileInfo.size,
      unit: fileInfo.unit,
    };
  };

  const handleDownload = async (note) => {
    if (downloadProgress[note.id] && downloadProgress[note.id] < 100) return;

    // Start download progress
    setDownloadProgress((prev) => ({
      ...prev,
      [note.id]: 0,
    }));

    try {
      // Simulate download progress with more realistic timing
      const progressSteps = [10, 25, 40, 55, 70, 85, 95, 100];

      for (let i = 0; i < progressSteps.length; i++) {
        const progress = progressSteps[i];
        setDownloadProgress((prev) => ({
          ...prev,
          [note.id]: progress,
        }));

        await new Promise((resolve) =>
          setTimeout(resolve, progress === 95 ? 600 : 400),
        );
      }

      // Create a temporary link element for download
      const fileUrl = `/notes/${encodeURIComponent(note.fileName)}`;

      // Create anchor element and trigger download
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = note.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Update downloads count
      note.downloads += 1;

      // Reset progress after a short delay
      setTimeout(() => {
        setDownloadProgress((prev) => ({
          ...prev,
          [note.id]: null,
        }));
      }, 1000);
    } catch (error) {
      console.error("Download failed:", error);
      setDownloadProgress((prev) => ({
        ...prev,
        [note.id]: null,
      }));
    }
  };

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "advanced":
        return "bg-red-500 text-white";
      case "intermediate":
        return "bg-yellow-500 text-gray-900";
      case "beginner":
        return "bg-green-500 text-white";
      default:
        return "bg-blue-500 text-white";
    }
  };

  const isDownloading = (noteId) => {
    return (
      downloadProgress[noteId] !== undefined &&
      downloadProgress[noteId] !== null &&
      downloadProgress[noteId] < 100
    );
  };

  return (
    <div className="w-full h-full overflow-y-auto scrollbar-none">
      <main className="container mx-auto p-4">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2 capitalize">
                {categoryId} Notes
              </h1>
              <p className="text-gray-400">
                Discover comprehensive {categoryId} development resources
              </p>
            </div>
          </div>
        </div>

        {/* Notes Grid */}
        {filteredNotes.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-8xl mb-6">📚</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              No notes found
            </h3>
            <p className="text-gray-400 text-lg mb-6">
              We couldn't find any notes matching "{searchTerm}"
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredNotes.map((note) => {
              const isDownloadingNote = isDownloading(note.id);
              const currentSizeInfo = isDownloadingNote
                ? calculateCurrentSize(note, downloadProgress[note.id])
                : null;

              return (
                <div
                  key={note.id}
                  className="bg-[#121212] rounded-xl shadow-lg border-[#2f2f2f] border-2 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="p-6">
                    {/* Header with level and file size */}
                    <div className="flex justify-between items-start mb-4">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getLevelColor(
                          note.level,
                        )}`}
                      >
                        {note.level}
                      </span>
                      <div className="text-right">
                        <span className="text-white font-semibold text-sm">
                          {note.fileSize}
                        </span>
                      </div>
                    </div>

                    {/* Note Title */}
                    <div className="flex gap-4 items-center mb-3">
                      <div className="border-red-400 border-2 p-2 rounded-lg flex items-center justify-center bg-red-400/20">
                        <FaFilePdf className="size-7 text-red-500/90" />
                      </div>
                      <h3 className="font-semibold text-xl text-white line-clamp-2 group-hover:text-blue-300 transition-colors duration-200">
                        {note.title}
                      </h3>
                    </div>

                    {/* Author and Meta Information */}
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-5">
                      <div className="flex items-center text-gray-500 text-sm">
                        <span className="mr-2">👨‍💻</span>
                        <span>By {note.author}</span>
                      </div>
                      <span className="flex items-center">
                        📥 {note.downloads.toLocaleString()} downloads
                      </span>
                    </div>

                    {/* Download Button with Progress Bar */}
                    <div className="space-y-3">
                      {/* Progress Bar with File Size */}
                      {isDownloadingNote && (
                        <div className="space-y-2">
                          <div className="w-full bg-gray-700 rounded-full h-2.5">
                            <div
                              className="bg-lime-500 h-2.5 rounded-full transition-all duration-300 ease-out"
                              style={{ width: `${downloadProgress[note.id]}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between items-center text-xs text-gray-400">
                            <span>
                              {formatFileSize(
                                currentSizeInfo.current,
                                currentSizeInfo.unit,
                              )}{" "}
                              /{" "}
                              {formatFileSize(
                                currentSizeInfo.total,
                                currentSizeInfo.unit,
                              )}
                            </span>
                            <span>{downloadProgress[note.id]}%</span>
                          </div>
                        </div>
                      )}

                      {/* Download Button */}
                      <button
                        onClick={() => handleDownload(note)}
                        disabled={isDownloadingNote}
                        className={`w-full ${
                          isDownloadingNote
                            ? "bg-gray-600 border-gray-600 text-gray-300 cursor-not-allowed"
                            : "bg-lime-400/40 border-lime-400 hover:bg-lime-400/60 text-lime-500"
                        } border-2 font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group/btn shadow-lg hover:shadow-xl relative cursor-pointer`}
                      >
                        {isDownloadingNote ? (
                          <>
                            {/* Loading spinner */}
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            <span>Downloading...</span>
                          </>
                        ) : (
                          <>
                            <span>Download</span>
                            <span className="ml-2 group-hover/btn:animate-bounce">
                              <GoDownload />
                            </span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer Note */}
        {filteredNotes.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Showing {filteredNotes.length} of {notes.length} notes • All notes
              are professionally curated by Sai Prithvi
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default CategoryPage;
