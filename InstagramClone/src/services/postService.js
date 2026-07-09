import { getDatabase } from "../database/database";

/* ===================================================
   POSTS
=================================================== */

export async function createPost(post) {
  const db = getDatabase();

  await db.runAsync(
    `
      INSERT OR IGNORE INTO posts
      (id,liked,saved,likes)

      VALUES (?,?,?,?)
    `,
    [
      post.id,
      post.liked ? 1 : 0,
      post.saved ? 1 : 0,
      post.likes,
    ]
  );
}

export async function updateLike(id, liked, likes) {
  const db = getDatabase();

  await db.runAsync(
    `
      UPDATE posts

      SET liked=?,
          likes=?

      WHERE id=?
    `,
    [liked ? 1 : 0, likes, id]
  );
}

export async function updateSaved(id, saved) {
  const db = getDatabase();

  await db.runAsync(
    `
      UPDATE posts

      SET saved=?

      WHERE id=?
    `,
    [saved ? 1 : 0, id]
  );
}

export async function getPosts() {
  const db = getDatabase();

  return await db.getAllAsync(
    `
      SELECT *

      FROM posts
    `
  );
}

/* ===================================================
   COMMENTS
=================================================== */

export async function addComment(
  postId,
  username,
  comment
) {
  const db = getDatabase();

  await db.runAsync(
    `
      INSERT INTO comments

      (postId,username,comment)

      VALUES (?,?,?)
    `,
    [postId, username, comment]
  );
}

export async function getComments(postId) {
  const db = getDatabase();

  return await db.getAllAsync(
    `
      SELECT *

      FROM comments

      WHERE postId=?
    `,
    [postId]
  );
}