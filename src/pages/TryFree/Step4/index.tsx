import styled from "styled-components";
import { useDropzone } from "react-dropzone";

import { Button, Icon } from "ui";
import { colors, typography } from "ui/theme";
import PageTemplate from "../components/PageTemplate";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useToast } from "ui/Toast";
import { useTryFreeContext } from "../context/TryFreeContext";
import { successApiRequest } from "mocks/apiRequests";

const Form = styled.div`
  display: grid;
  row-gap: 35px;
`;

const Divider = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  column-gap: 8px;

  div {
    border-top: 1px solid #c4c4c4;
    height: 0;
  }

  span {
    font-family: ${typography.inter};
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
  }
`;

const DropArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-family: ${typography.inter};
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    color: ${colors.gray300};
    margin-top: 32px;
  }
`;

const PhotosButton = styled.button`
  width: 100%;
  height: 54px;
  background: #f1f1f1;
  color: #686868;
  border: 1px solid #94a2b3;
  border-radius: 6px;
  outline: 0;
  font-size: 16px;
  line-height: 29px;
  font-weight: bold;
`;

const ImagePreview = styled.img`
  width: 300px;
`;

interface DropzoneFileProps {
  [propName: string]: any;
}

function TryFreeStep4() {
  const router = useRouter();
  const toast = useToast();
  const tryFree = useTryFreeContext();

  const [files, setFiles] = useState<Array<DropzoneFileProps>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop: function (acceptedFiles) {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  async function send() {
    try {
      const storedInfo = tryFree?.getInfo();

      setLoading(true);

      // TODO: replace this for the actual api call for
      // creating a free trial account
      // The info abount the submitted files are store into files variable
      const res = await successApiRequest({ storedInfo, files });
      console.log(res);

      // TODO: redirect to the correct endpoint
      router.push("/");
    } catch (err) {
      toast?.error({
        title: "Falha ao enviar dados",
        subtitle: "Tente novamente",
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  // TODO: replace for a better loading state
  if (loading) return <div>Loading..</div>;

  return (
    <PageTemplate
      currentStep={4}
      stepTitle="Insira um documento com foto CNH ou RG"
      showQueryResultInfo
    >
      <Form>
        <DropArea {...getRootProps()}>
          <input {...getInputProps()} />

          {files.length === 0 ? (
            <>
              <Icon name="dropPhoto" />
              <p>Arraste fotos pra cá</p>
            </>
          ) : (
            files.map(function (file) {
              return (
                <ImagePreview
                  key={file.preview}
                  src={file.preview}
                  alt={file.name}
                />
              );
            })
          )}
        </DropArea>

        <Divider>
          <div></div>
          <span>ou</span>
          <div></div>
        </Divider>

        <PhotosButton type="button" onClick={open}>
          Selecione fotos do computador
        </PhotosButton>

        <Button
          background="blueGradient"
          uppercase
          padding="12px"
          width="100%"
          margin-top="50px"
          onClick={send}
        >
          Finalizar
        </Button>
      </Form>
    </PageTemplate>
  );
}

export default TryFreeStep4;
