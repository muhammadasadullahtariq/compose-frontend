import { S3, PutObjectCommand } from "@aws-sdk/client-s3";

const uploadImage = async (file) => {
  try {
    const s3 = new S3({
      region: process.env.NEXT_PUBLIC_AWS_REGION,
      credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
      },
    });
    const iname = file.name.split(".")[0] + new Date().toISOString();
    const uploadParams = {
      Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
      Key: iname,
      Body: file,
    };
   // console.log(uploadParams);
    const res = await s3.send(new PutObjectCommand(uploadParams));
    //console.log("https://tripimages1.s3.amazonaws.com/" + iname);
    return {
      data: "https://tripimages1.s3.amazonaws.com/" + iname,
      message: "Success",
    };
  } catch (error) {
    console.log(error);
    return { error: error.message, message: "Fail" };
  }
};

export default uploadImage;
