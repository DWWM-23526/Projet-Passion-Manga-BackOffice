export default interface Manga {
  manga_name: string;
  img_manga: string;
  edition: string;
  total_tome_number: number;
  tome_number: number;
  year_release: string;
  texte: string;
  Id_mangaka: number;
  tags?: number[];
  is_deleted: boolean;
}
