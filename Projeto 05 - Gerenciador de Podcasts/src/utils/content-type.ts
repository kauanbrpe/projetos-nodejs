export enum ContentType {
    // Text
    PLAIN_TEXT = "text/plain",
    HTML = "text/html",
    CSS = "text/css",
    CSV = "text/csv",
    XML_TEXT = "text/xml",
    MARKDOWN = "text/markdown",
    JAVASCRIPT_TEXT = "text/javascript",

    // Application
    JSON = "application/json",
    XML = "application/xml",
    JAVASCRIPT = "application/javascript",
    PDF = "application/pdf",
    ZIP = "application/zip",
    GZIP = "application/gzip",
    OCTET_STREAM = "application/octet-stream",
    FORM_URLENCODED = "application/x-www-form-urlencoded",
    MS_WORD = "application/msword",
    MS_WORD_DOCX = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    MS_EXCEL = "application/vnd.ms-excel",
    MS_EXCEL_XLSX = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    MS_POWERPOINT = "application/vnd.ms-powerpoint",
    MS_POWERPOINT_PPTX = "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    GRAPHQL = "application/graphql",
    LD_JSON = "application/ld+json",
    RTF = "application/rtf",
    WASM = "application/wasm",
    PROTOBUF = "application/x-protobuf",
    SQL = "application/sql",

    // Multipart
    FORM_DATA = "multipart/form-data",
    MULTIPART_MIXED = "multipart/mixed",
    MULTIPART_ALTERNATIVE = "multipart/alternative",
    MULTIPART_RELATED = "multipart/related",

    // Image
    PNG = "image/png",
    JPEG = "image/jpeg",
    GIF = "image/gif",
    SVG = "image/svg+xml",
    WEBP = "image/webp",
    BMP = "image/bmp",
    ICO = "image/x-icon",
    TIFF = "image/tiff",
    AVIF = "image/avif",

    // Audio
    MP3 = "audio/mpeg",
    WAV = "audio/wav",
    OGG_AUDIO = "audio/ogg",
    WEBM_AUDIO = "audio/webm",
    AAC = "audio/aac",

    // Video
    MP4 = "video/mp4",
    WEBM_VIDEO = "video/webm",
    OGG_VIDEO = "video/ogg",
    AVI = "video/x-msvideo",
    MPEG_VIDEO = "video/mpeg",
    QUICKTIME = "video/quicktime",

    // Font
    WOFF = "font/woff",
    WOFF2 = "font/woff2",
    TTF = "font/ttf",
    OTF = "font/otf",
}