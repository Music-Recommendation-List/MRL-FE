import React from "react";
import {
  Text,
  Input,
  Image,
  Grid,
  Button,
  Upload,
  DropDown,
} from "../elements";

const PostAdd = () => {
  return (
    <React.Fragment>
      <Grid>
        <Grid width="25%" margin="0px auto">
          <Grid padding="16px">
            <Text margin="0px" size="36px" bold>
              포스트 생성
            </Text>
          </Grid>

          <Grid>
            <Grid padding="16px">
              <Text margin="0px" size="24px" bold>
                미리보기
              </Text>
            </Grid>

            <Grid width="500px" height="50%" margin="0px 0px 10px 0px">
              <Image shape="rectangle" />
            </Grid>
            <Upload />
          </Grid>

          <Grid width="500px" margin="10px 0px 0px 0px">
            <Grid is_flex>
              <Text size="20px" width="90px">
                곡 이름
              </Text>
              <Input></Input>
            </Grid>
            <Grid is_flex>
              <Text size="20px" width="90px">
                곡 설명
              </Text>
              <Input></Input>
            </Grid>
            <Grid is_flex>
              <Text size="20px" width="90px" margin="6px 0px">
                유튜브링크
              </Text>
              <Input></Input>
            </Grid>

            <Grid margin="20px 0px">
              <Grid flex>
                <Text center size="20px" width="70px" margin="6px 0px">
                  장르
                </Text>
                <DropDown />
              </Grid>

              <Grid flex>
                <Text center size="20px" width="70px" margin="6px 0px">
                  기분
                </Text>
                <DropDown />
              </Grid>

              <Grid flex>
                <Text center size="20px" width="70px" margin="6px 0px">
                  계절
                </Text>
                <DropDown />
              </Grid>
            </Grid>

            <Grid end_flex margin="0px 0px 10px 0px">
              <Button width="80px" padding="20px" margin="10px 0px 0px 30px">
                저장
              </Button>
              <Button width="80px" padding="20px" margin="10px 10px 0px 10px">
                취소
              </Button>
            </Grid>
  
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PostAdd;
