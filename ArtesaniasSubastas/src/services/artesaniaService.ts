// src/services/artesaniaService.ts
import { getDatabase } from '../database/database';
import { Artesano, Producto } from '../types/index';

// ── Artesanos ──────────────────────────────────────────────────────────
export async function obtenerArtesanos(): Promise<Artesano[]> {
  const db = await getDatabase();
  return db.getAllAsync<Artesano>('SELECT * FROM artesanos ORDER BY nombre');
}

// ── Productos ──────────────────────────────────────────────────────────
export async function obtenerProductos(): Promise<Producto[]> {
  const db = await getDatabase();
  return db.getAllAsync<Producto>('SELECT * FROM productos');
}