// Register filePond plugins
FilePond.registerPlugin(
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateSize,
    FilePondPluginFileValidateType
)

FilePond.parse(document.body)

// Create file upload for products
const productCover = document.querySelector('.productCover')
FilePond.create(productCover, {
    acceptedFileTypes: ['image/png', 'image/jpeg'],
    maxFileSize: '2MB',
    imageResizeTargetWidth: 1024,
    imageResizeTargetHeight: 1024,
})

// Create file upload for user profile
const profileCover = document.querySelector('.profileCover')
FilePond.create(profileCover, {
    acceptedFileTypes: ['image/png', 'image/jpeg'],
    maxFileSize: '1MB',
    imageResizeTargetWidth: 1024,
    imageResizeTargetHeight: 1024,
})

