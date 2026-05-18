export function getImageURL(person, size = 's') //Default value
{
    return (
        'https://www.pngegg.com/en/search?q=pocoyo' +
        person.imageId +
        size +
        '.jpg'
    );
}