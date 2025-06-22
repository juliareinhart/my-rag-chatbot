// recursiveChunker.js

function splitTextWithSeparator(text, separator, keepSeparator) {
  if (!separator) return text.split("").filter(Boolean);

  if (keepSeparator) {
    const parts = text.split(new RegExp(`(${separator})`, "g"));
    const merged = [];
    for (let i = 0; i < parts.length; i += 2) {
      merged.push(parts[i] + (parts[i + 1] || ""));
    }
    return merged.filter(Boolean);
  } else {
    return text.split(new RegExp(separator)).filter(Boolean);
  }
}

function mergeChunks(chunks, chunkSize) {
  const merged = [];
  let current = "";
  for (const part of chunks) {
    if ((current + part).length <= chunkSize) {
      current += part;
    } else {
      if (current) merged.push(current);
      current = part.length <= chunkSize ? part : ""; // skip if too long
    }
  }
  if (current) merged.push(current);
  return merged;
}

function recursiveChunk(
  text,
  separators = ["\n\n", "\n", "\\.", "\\?", "!", " ", ""],
  chunkSize = 800,
  overlap = 0
) {
  function splitRecursive(currentText, remainingSeparators) {
    if (currentText.length <= chunkSize) return [currentText];

    const [separator, ...nextSeparators] = remainingSeparators;
    const splits = splitTextWithSeparator(currentText, separator, false);
    const merged = mergeChunks(splits, chunkSize);

    const finalChunks = [];
    for (const chunk of merged) {
      if (chunk.length <= chunkSize) {
        finalChunks.push(chunk);
      } else if (nextSeparators.length) {
        finalChunks.push(...splitRecursive(chunk, nextSeparators));
      } else {
        // Fallback: hard split
        for (let i = 0; i < chunk.length; i += chunkSize) {
          finalChunks.push(chunk.slice(i, i + chunkSize));
        }
      }
    }
    return finalChunks;
  }

  const chunks = splitRecursive(text, separators);

  // Add overlap (optional)
  if (overlap > 0) {
    const overlappedChunks = [];
    for (let i = 0; i < chunks.length; i++) {
      const current = chunks[i];
      const next = chunks[i + 1] || "";
      const slice = next.slice(0, overlap);
      overlappedChunks.push(current + slice);
    }
    return overlappedChunks;
  }

  return chunks;
}

export default recursiveChunk;
