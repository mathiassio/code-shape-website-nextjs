import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .section-process {
    --gradient-color-1: #f7813a;
    --gradient-color-2: #f22176;
    --gradient-color-3: #fa0583;
    --gradient-color-4: #7e28c7;
    --gradient-color-5: #037de8;
    --gradient-color-6: #0fd9d9;
    .process-steps-container {
      .process-step-container {
        .process-step-title-container {
          margin-top: -16px;
          position: relative;
          .process-step-title,
          .process-step-title-overlay {
            font-family: -apple-system, system-ui, BlinkMacSystemFont,
              "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

            font-weight: 900;
            margin: 0;
            line-height: 1.2em;
            letter-spacing: -4px;
          }
          .process-step-title {
          }
          .process-step-title-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: auto;
            padding-right: 30px;
            height: 100%;
            opacity: 1;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
          }
        }

        &.process-step-1 {
          .process-step-title-overlay {
            background-image: linear-gradient(
              90deg,
              var(--gradient-color-1),
              var(--gradient-color-2)
            );
            animation: animated-gradient-title-1 8s infinite;
          }
        }

        &.process-step-2 {
          .process-step-title-overlay {
            background-image: linear-gradient(
              90deg,
              var(--gradient-color-3),
              var(--gradient-color-4)
            );
            animation: animated-gradient-title-2 8s infinite;
          }
        }

        &.process-step-3 {
          .process-step-title-overlay {
            background-image: linear-gradient(
              90deg,
              var(--gradient-color-5),
              var(--gradient-color-6)
            );
            animation: animated-gradient-title-3 8s infinite;
          }
        }
      }
    }

    @keyframes animated-gradient-title-1 {
      0%,
      16.667%,
      100% {
        opacity: 1;
      }

      33.333%,
      83.333% {
        opacity: 0;
      }
    }

    @keyframes animated-gradient-title-2 {
      0%,
      16.667%,
      66.667%,
      100% {
        opacity: 0;
      }

      33.333%,
      50% {
        opacity: 1;
      }
    }

    @keyframes animated-gradient-title-3 {
      0%,
      50%,
      100% {
        opacity: 0;
      }

      66.667%,
      83.333% {
        opacity: 1;
      }
    }
  }
`;

export default function GradientTransition() {
  return (
    <Wrapper className="grid justify-center">
      <section class="section-process">
        <div class="section-container">
          <div class="process-steps-container container-medium with-padding">
            <div class="process-step-container process-step-1">
              <div class="process-step-title-container">
                <h1 class="process-step-title text-7xl md:text-9xl">Learn.</h1>
                <div class="process-step-title-overlay text-7xl md:text-9xl">
                  Learn.
                </div>
              </div>
            </div>
            <div class="process-step-container process-step-2">
              <div class="process-step-title-container">
                <h1 class="process-step-title text-7xl md:text-9xl">Create.</h1>
                <div class="process-step-title-overlay text-7xl md:text-9xl">
                  Create.
                </div>
              </div>
            </div>
            <div class="process-step-container process-step-3">
              <div class="process-step-title-container">
                <h1 class="process-step-title text-7xl md:text-9xl">
                  Develop.
                </h1>
                <div class="process-step-title-overlay text-7xl md:text-9xl">
                  Develop.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
