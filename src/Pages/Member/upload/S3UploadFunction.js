import { API} from "../../../Services/API.Js";


export async function s3Upload(file,userid) {
  const filename = `${userid}-${Date.now()}-${file.name}`;

  const stored = await API.put(filename, file, {
    contentType: file.type
  });

  return stored.key;
}

export async function s3UploadPublic(file,userid) {
  const filename = `${userid}-${Date.now()}-${file.name}`;

  const stored = await API.put(filename, file, {
    contentType: file.type,
    level:"public"
  });

  return stored.key;
}